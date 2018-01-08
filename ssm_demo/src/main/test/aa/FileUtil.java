
package aa;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;

public class FileUtil {

    private static String  name = "SDGStorageManageService"; //老的项目
    private static String  destname = "yunnan-SDGStorageManageService"; //新的项目

    public static void main(String[] args) {
        // 需要复制的目标文件或目标文件夹
        String pathname = "E:/eclipse_work_space/"+name+"/trunk";
        File file = new File(pathname+"/src");
        File filePom = new File(pathname+"/pom.xml");
        // 复制到的位置
        String topathname = "E:/eclipse_work_space/"+destname+"/trunk";
        File toFile = new File(topathname);
        try {
            clearFiles(topathname+"/src");
            clearFiles(topathname+"/pom.xml");
            copy(file, toFile);
            copy(filePom, toFile);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }

    public static void copy(File file, File toFile) throws Exception {
        byte[] b = new byte[1024];
        int a;
        FileInputStream fis;
        FileOutputStream fos;
        if (file.isDirectory()) {
            String filepath = file.getAbsolutePath();
            filepath = filepath.replaceAll("\\\\", "/");
            String toFilepath = toFile.getAbsolutePath();
            toFilepath = toFilepath.replaceAll("\\\\", "/");
            int lastIndexOf = filepath.lastIndexOf("/");
            toFilepath = toFilepath + filepath.substring(lastIndexOf, filepath.length());
            File copy = new File(toFilepath);
            // 复制文件夹
            if (!copy.exists()) {
                copy.mkdir();
            }
            // 遍历文件夹
            for (File f : file.listFiles()) {
                copy(f, copy);
            }
        } else {
            if (toFile.isDirectory()) {
                String filepath = file.getAbsolutePath();
                filepath = filepath.replaceAll("\\\\", "/");
                String toFilepath = toFile.getAbsolutePath();
                toFilepath = toFilepath.replaceAll("\\\\", "/");
                int lastIndexOf = filepath.lastIndexOf("/");
                toFilepath = toFilepath + filepath.substring(lastIndexOf, filepath.length());

                // 写文件
                File newFile = new File(toFilepath);
                fis = new FileInputStream(file);
                fos = new FileOutputStream(newFile);
                while ((a = fis.read(b)) != -1) {
                    fos.write(b, 0, a);
                }
            } else {
                // 写文件
                fis = new FileInputStream(file);
                fos = new FileOutputStream(toFile);
                while ((a = fis.read(b)) != -1) {
                    fos.write(b, 0, a);
                }
            }

        }
    }

    private static void clearFiles(String workspaceRootPath) {
        File file = new File(workspaceRootPath);
        if (file.exists()) {
            deleteFile(file);
        }
    }

    private static void deleteFile(File file) {
        if (file.isDirectory()) {
            File[] files = file.listFiles();
            for (int i = 0; i < files.length; i++) {
                deleteFile(files[i]);
            }
        }
        file.delete();
    }

}
